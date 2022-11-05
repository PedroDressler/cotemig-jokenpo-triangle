import React, { useState } from 'react'
import Button from './Button'
import jkpCross from './assets/cross.png'
import jkpPedra from './assets/pedra.png'
import jkpPapel from './assets/papel.png'
import jkpTesoura from './assets/tesoura.png'
import Imagem from './Imagem'
import { jokenpoPlays } from './constants'
import { ImCross } from 'react-icons/im'
import './styles/App.css'

const Jokenpo = () => {
  const [jogadaPlayer, setJogadaAtual] = useState({
    playIndex: null,
    currentPlay: '',
    img: jkpCross
  })
  const [jogadaBot, setJogadaBot] = useState({
    playIndex: null,
    currentPlay: '',
    img: jkpCross
  })
  const [verify, setVerify] = useState(false)
  const [jogadas, setJogadas] = useState({
    plays: 0,
    wins: 0,
    loss: 0,
    draws: 0
  })
  
  const handleSetJogada = (action) => {
    setJogadaAtual(action)
    setVerify(true)
  }

  const handleStartGameButton = () => {
    const random = jokenpoPlays[Math.floor(Math.random() * jokenpoPlays.length)]
    // 1 - Pedra | 2 - Papel | 3 - Tesoura
    const rockWin = jogadaPlayer.playIndex === 1 && random.playIndex === 3,
          paperWin = jogadaPlayer.playIndex === 2 && random.playIndex === 1,
          scissorsWin = jogadaPlayer.playIndex === 3 && random.playIndex === 2,
          empate = jogadaPlayer.playIndex === random.playIndex,
          playerWin = rockWin || paperWin || scissorsWin,
          currentPlayerScore = {...jogadas}
    if(empate) {
      currentPlayerScore.draws += 1
    } else {
      if(playerWin) {
        currentPlayerScore.wins += 1
      } else {
        currentPlayerScore.loss += 1
      }
    }
    currentPlayerScore.plays += 1
    setJogadas(currentPlayerScore)
    setJogadaBot(random)
  }

  return (
    <div className='main-container'>
      <h1 className='title'>Jo-Ken-Po!</h1>
      <div className="score-container">
        <span className='rodadas-text'>Rodadas ocorridas: <b>{jogadas.plays}</b></span>
        <span className='rodadas-text'>Rodadas ganhas: <b>{jogadas.wins}</b></span>
        <span className='rodadas-text'>Rodadas perdidas: <b>{jogadas.loss}</b></span>
        <span className='rodadas-text'>Empates: <b>{jogadas.draws}</b></span>
      </div>

      <div>
        <div className="button-container">
          <Button action={{ playIndex: 1, currentPlay: 'Pedra', img: jkpPedra }} onClick={handleSetJogada} >
              <Imagem src={jkpPedra} height={75} />
          </Button>
          <Button action={{ playIndex: 2, currentPlay: 'Papel', img: jkpPapel }} onClick={handleSetJogada} >
              <Imagem src={jkpPapel} height={75} />
          </Button>
          <Button action={{ playIndex: 3, currentPlay: 'Tesoura', img: jkpTesoura }} onClick={handleSetJogada} >
              <Imagem src={jkpTesoura} height={75} />
          </Button>
        </div>
        <div className="button-container">
          <Button
            className='play-button'
            onClick={handleStartGameButton}
            disabled={!verify}>Jogar!</Button>
        </div>
      </div>

      <div className="current-play-container">
        <div className="player participant">
          <Imagem width={75} src={jogadaPlayer.img} />
        </div>
        <div className="cross">
          <ImCross size={25} />  
        </div>
        <div className="bot participant">
          <Imagem width={75} src={jogadaBot.img} />
        </div>
      </div>

    </div>
  )
}

export default Jokenpo

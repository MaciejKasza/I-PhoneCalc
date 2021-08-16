import Button from '../Button/Button'
import './App.css';

const App = () => {

  const handleButtonClick = (event, content) => {
    console.log(content)
  }
  return (
    <div className="app">
      <div className="display">0</div>
      <div className="buttons">
      <Button     
          handleButtonClick={handleButtonClick }    
          content="AC"
          type="function"
        />
        <Button handleButtonClick={handleButtonClick } content="±" type="function" />
        <Button handleButtonClick={handleButtonClick } content="%" type="function" />
        <Button handleButtonClick={handleButtonClick } content="÷" type="operator" />
        <Button handleButtonClick={handleButtonClick } content="7" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="8" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="9" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="×" type="operator" />
        <Button handleButtonClick={handleButtonClick } content="4" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="5" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="6" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="−" type="operator" />
        <Button handleButtonClick={handleButtonClick } content="1" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="2" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="3" type="default"/>
        <Button handleButtonClick={handleButtonClick } content="+" type="operator" />
        <Button handleButtonClick={handleButtonClick } content="0" type="default"/>
        <Button handleButtonClick={handleButtonClick }  content="." type="default"/>
        <Button handleButtonClick={handleButtonClick } content="=" type="operator" />
      </div>
    </div>)
}

export default App;

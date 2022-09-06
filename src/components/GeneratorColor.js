import Button from './Button';

export default function Gerador() {
  function changeColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = 1;

    const colorBackground = `rgba(${r}, ${g}, ${b}, ${a})`;

    const element = document.querySelector('section');
    element.style.setProperty('background', colorBackground);
  }

  return (
    <span>
      Customizar Rocketcard
      <Button onClick={changeColor}>Gerar Background</Button>
    </span>
  );
}

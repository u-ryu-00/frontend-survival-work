const darkMode = false;

function primaryColor() {
  return darkMode ? '#F00' : '#00F';
}

export default function Greeting() {
  return (
    <p
      style={{
        color: primaryColor(),
      }}
    >
      Hello, world!
    </p>
  );
}

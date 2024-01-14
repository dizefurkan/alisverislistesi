type Props = {
  block?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

function Button(props: Props) {
  return (
    <button className="nes-btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;

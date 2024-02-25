type Props = {
  block?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

function Button(props: Props) {
  return (
    <button
      className="nes-btn"
      style={{ width: props.block ? "100%" : "" }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;

type Props = {
  block?: boolean;
  children: React.ReactNode;
};

function Button(props: Props) {
  return <button className="nes-btn">{props.children}</button>;
}

export default Button;

export function Header({ title }: Props) {
  return <h1>{title}</h1>;
}

type Props = {
  title: string;
};

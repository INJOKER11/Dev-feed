type AvatarProps = {
  img: string;
  size?: "sm" | "lg";
};

const sizeStyles = {
  lg: "max-h-12 max-w-12",
  sm: "max-h-10 max-w-10",
};

export const Avatar = (props: AvatarProps) => {
  const { img, size = "lg" } = props;
  return (
    <img
      className={`${sizeStyles[size]} rounded-full`}
      src={img}
      alt={"avatar"}
    />
  );
};

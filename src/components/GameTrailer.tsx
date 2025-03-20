import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameID: number;
}

const GameTrailer = ({ gameID }: Props) => {
  const { data, error, isLoading } = useTrailers(gameID);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) throw new Error("Error loading trailers");

  const firstTrailer = data?.results[0];

  if (!firstTrailer) {
    return null;
  }

  return (
    <video
      src={firstTrailer?.data[480]}
      poster={firstTrailer?.preview}
      controls
    />
  );
};

export default GameTrailer;

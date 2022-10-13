export default function Nft(props) {
  const nft = props.nft;

  return (
    <div className="w-1/3 flex flex-col">
      <div className="rounded-2xl shadow-lg md:max-w-2xl max-w-md mx-auto overflow-hidden ">
        <div className="p-8 text-lg">
          <img src={nft.originalContent.uri} alt={nft.name} />
          <div className="mt-3 whitespace-pre-line">
            {nft.name}
          </div>
        </div>
      </div>
    </div>
  );
}
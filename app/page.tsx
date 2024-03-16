import AssetsCard from "./components/AssetsCard";

export default function Home() {
  const assets = [];
  for (let i = 1; i <= 17; i++) {
    assets.push(<AssetsCard />);
  }

  return (
    <div className="container py-[20px] px-[20px] md:px-[50px] lg:py-[20px] lg:px-[50px] w-[100%]">
      <div className="md:grid md:grid-cols-2 md:gap-[30px] lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-[30px] gap-[20px] flex flex-col items-center">
        {
          assets.map((item, idx) => {
            return (
              <div className="" key={idx}>
                {item}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

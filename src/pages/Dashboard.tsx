
type CardItem = {
  image: string;
  title: string;
};
const Dashboard = () => {
  const cards: CardItem[] = [
    { image: "src/assets/images/1.jpg", title: "فروش انشعابات" },
    { image: "src/assets/images/2.jpg", title: "خدمات پس از فروش" },
    { image: "src/assets/images/3.jpg", title: "تغییر مشخصات انشعاب" },
    { image: "src/assets/images/4.jpg", title: "تسویه حساب" },
    { image: "src/assets/images/5.jpg", title: "تسقیط بدهی انرژی" },
    { image: "src/assets/images/6.jpg", title: "اصلاحات فروش انرژی" },
    { image: "src/assets/images/7.jpg", title: "قرایت کنتور" },
    { image: "src/assets/images/8.jpg", title: "تغییر شناسایی گروهی" },
  ];
  return (
    <div>
        <div className="w-full h-12 rounded-2xl mb-6 bg-white"></div>
    <div className="grid grid-cols-12 gap-10">
      {cards.map((item) => (
        <div className="flex flex-col gap-4 col-span-3 h-64 rounded-2xl bg-white border shadow-lg">
          <img src={item.image} className="rounded-t-2xl h-48"></img>
          <button className="bg-green-50 hover:bg-green-100 border-none w-48 h-8 mx-auto rounded-2xl"><p className="text-[#1B6442]">{item.title}</p></button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Dashboard;

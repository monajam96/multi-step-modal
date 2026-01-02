import { useNavigate } from "react-router-dom";

type CardItem = {
  image: string;
  title: string;
  navigation: string;
};

const Dashboard = () => {
  const navigate = useNavigate();

  const cards: CardItem[] = [
    {
      image: "src/assets/images/1.jpg",
      title: "فروش انشعابات",
      navigation: "/new-connection",
    },
    {
      image: "src/assets/images/2.jpg",
      title: "خدمات پس از فروش",
      navigation: "/",
    },
    {
      image: "src/assets/images/3.jpg",
      title: "تغییر مشخصات انشعاب",
      navigation: "/",
    },
    { image: "src/assets/images/4.jpg", title: "تسویه حساب", navigation: "/" },
    {
      image: "src/assets/images/5.jpg",
      title: "تسقیط بدهی انرژی",
      navigation: "/",
    },
    {
      image: "src/assets/images/6.jpg",
      title: "اصلاحات فروش انرژی",
      navigation: "/",
    },
    { image: "src/assets/images/7.jpg", title: "قرایت کنتور", navigation: "/" },
    {
      image: "src/assets/images/8.jpg",
      title: "تغییر شناسایی گروهی",
      navigation: "/",
    },
  ];
  return (
    <div>
      <div className="w-full h-12 rounded-2xl mb-6 bg-white flex items-start p-3 ">
        توزیع برق - صفحه اصلی
      </div>
      <div className="grid grid-cols-12 gap-10">
        {cards.map((item) => (
          <div className="flex flex-col gap-4 col-span-3 h-64 rounded-2xl bg-white border shadow-lg">
            <img src={item.image} className="rounded-t-2xl h-48"></img>
            <button
              onClick={() => navigate(item.navigation)}
              className="bg-green-50 hover:bg-green-100 border-none w-48 h-8 mx-auto rounded-2xl"
            >
              <p className="text-[#1B6442]">{item.title}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

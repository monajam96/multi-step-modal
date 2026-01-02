import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useForm } from "react-hook-form";
import { useState } from "react";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";

type FormValues = {
  firstName: string;
  lastName: string;
  nationalId: string;
  fatherName: string;
  phone: string;
  gender: string;
  email: string;
  address: string;
};
type FormValues2 = {
  connectionType: string;
  requestNumber: string;
  connectionAddress: string;
  capacity: string;
  tariffType: string;
  startDate: string;
};
const NewConnectionOne = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<FormValues2>();
  const onSubmit = (data: FormValues) => {
    console.log("Form Data:", data);
    localStorage.setItem("newConnectionStep1", JSON.stringify(data));
    setStep(2);
  };
  const onSubmitStep2 = (data2: FormValues2) => {
    const step1Data = localStorage.getItem("newConnectionStep1");
    const mergedData = {
      ...JSON.parse(step1Data || "{}"),
      ...data2,
    };
    const prev =JSON.parse(localStorage.getItem("newConnections") || "[]");
   prev.push({id:crypto.randomUUID(),createdAt:new Date().toISOString(),...mergedData});
    localStorage.setItem("newConnections", JSON.stringify(prev));
    console.log("All Form Data:", mergedData);

    alert("اطلاعات با موفقیت ذخیره شد!");
  };
  return (
    <div>
      <div className="flex justify-between items-center text-gray-200 w-full h-[65px] rounded-2xl mb-6 bg-gradient-to-l from-[#1B6442] to-[#052b1a] p-3 ">
        <div className="flex flex-col items-start">
          <p className="text-xl font-bold">اطلاعات متقاضی</p>
          <p className="text-sm">لطفا اطلاعات خود را با دقت وارد نمایید</p>
        </div>
        <div className="flex items-center gap-2">
          <LooksOneOutlinedIcon
            sx={{ width: 25, height: 25 }}
            className={step === 1 ? "text-gray-200" : "text-gray-400"}
          />
          <div
            className={
              step === 1
                ? "text-gray-200 flex flex-col"
                : "text-gray-400 flex flex-col"
            }
          >
            <p className={step === 1 ? "font-bold" : ""}>مرحله اول</p>
            <p className="text-xs">اطلاعات متقاضی</p>
          </div>
          <KeyboardDoubleArrowLeftOutlinedIcon />
          <LooksTwoOutlinedIcon
            sx={{ width: 25, height: 25 }}
            className={step === 2 ? "text-gray-200" : "text-gray-400"}
          />
          <div
            className={
              step === 2
                ? "text-gray-200 flex flex-col"
                : "text-gray-400 flex flex-col"
            }
          >
            <p className={step === 2 ? "font-bold" : ""}>مرحله دوم</p>
            <p className="text-xs">اطلاعات تقاضا</p>
          </div>
        </div>
      </div>
      {step === 1 && (
        <>
          <div className="flex justify-start items-center text-[#1B6442] my-7">
            <PersonOutlineOutlinedIcon sx={{ width: 30, height: 30 }} />
            <p className="text-xl font-bold">اطلاعات فردی(حقیقی)</p>
          </div>
          <div className="flex-1 h-[1px] mb-6 bg-[#1B6442]/30"></div>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-12 gap-4 gap-y-8"
            >
              <div className="col-span-4 flex flex-col">
                <label className="font-bold text-[#1B6442] mr-2">نام</label>
                <input
                  {...register("firstName", { required: "نام الزامی است" })}
                  className="border rounded-2xl p-2 mt-1"
                  placeholder="نام خود را وارد کنید"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 flex flex-col">
                <label className="font-bold text-[#1B6442]">نام خانوادگی</label>
                <input
                  {...register("lastName", {
                    required: "نام خانوادگی الزامی است",
                  })}
                  className="border rounded-2xl p-2 mt-1"
                  placeholder="نام خانوادگی خود را وارد کنید"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 flex flex-col">
                <label className="font-bold text-[#1B6442] mr-2">نام پدر</label>
                <input
                  {...register("fatherName", {
                    required: "نام پدر الزامی است",
                  })}
                  className="border rounded-2xl p-2 mt-1"
                  placeholder="نام پدر را وارد کنید"
                />
                {errors.fatherName && (
                  <span className="text-red-500 text-sm">
                    {errors.fatherName.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 flex flex-col">
                <label className="font-bold text-[#1B6442]">کد ملی</label>
                <input
                  {...register("nationalId", {
                    required: "کد ملی الزامی است",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "کد ملی باید ۱۰ رقم باشد",
                    },
                  })}
                  className="border rounded-2xl p-2 mt-1"
                  placeholder="کد ملی خود را وارد کنید"
                />
                {errors.nationalId && (
                  <span className="text-red-500 text-sm">
                    {errors.nationalId.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 flex flex-col">
                <label className="font-bold text-[#1B6442]">شماره موبایل</label>
                <input
                  {...register("phone", {
                    required: "شماره موبایل الزامی است",
                    pattern: {
                      value: /^09\d{9}$/,
                      message: "شماره موبایل معتبر نیست",
                    },
                  })}
                  className="border rounded-2xl p-2 mt-1"
                  placeholder="مثال: 09123456789"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 flex flex-col">
                <label className="font-bold text-[#1B6442] mb-1">جنسیت</label>
                <div className="flex gap-6 items-center mt-1">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="مرد"
                      {...register("gender", {
                        required: "انتخاب جنسیت الزامی است",
                      })}
                    />
                    <span>مرد</span>
                  </label>

                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="زن"
                      {...register("gender", {
                        required: "انتخاب جنسیت الزامی است",
                      })}
                    />
                    <span>زن</span>
                  </label>
                </div>
                {errors.gender && (
                  <span className="text-red-500 text-sm">
                    {errors.gender.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 flex flex-col">
                <label className="font-bold text-[#1B6442]">ایمیل</label>
                <input
                  {...register("email", {
                    required: "ایمیل الزامی است",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "ایمیل معتبر نیست",
                    },
                  })}
                  className="border rounded-2xl p-2 mt-1"
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="col-span-4 flex flex-col">
                <label className="font-bold text-[#1B6442]">آدرس</label>
                <input
                  {...register("address", { required: "آدرس الزامی است" })}
                  className="border rounded-2xl p-2 mt-1"
                  placeholder="آدرس خود را وارد کنید"
                />
                {errors.address && (
                  <span className="text-red-500 text-sm">
                    {errors.address.message}
                  </span>
                )}
              </div>
              <div className="col-span-12 flex justify-end">
                <button
                  type="submit"
                  className="px-8 bg-[#1B6442] text-white rounded-2xl py-2 mt-4 hover:border hover:border-[#1B6442] hover:bg-green-200 hover:text-green-600"
                >
                  ثبت اطلاعات
                </button>
              </div>
            </form>
          </div>
        </>
      )}
      {step === 2 && (
        <div>
          <div className="flex justify-start items-center text-[#1B6442] my-7">
            <LooksTwoOutlinedIcon sx={{ width: 30, height: 30 }} />
            <p className="text-xl font-bold">اطلاعات تقاضا</p>
          </div>
          <div className="flex-1 h-[1px] mb-6 bg-[#1B6442]/30"></div>

          <form
            onSubmit={handleSubmit2(onSubmitStep2)}
            className="grid grid-cols-12 gap-4 gap-y-6"
          >
            <div className="col-span-4 flex flex-col">
              <label className="font-bold text-[#1B6442]">نوع انشعاب</label>
              <select
                {...register2("connectionType", {
                  required: "نوع انشعاب الزامی است",
                })}
                className="border rounded-2xl p-0.5 mt-1"
              >
                <option value="">انتخاب کنید</option>
                <option value="خانگی">خانگی</option>
                <option value="تجاری">تجاری</option>
                <option value="صنعتی">صنعتی</option>
              </select>
              {errors2.connectionType && (
                <span className="text-red-500 text-sm">
                  {errors2.connectionType.message}
                </span>
              )}
            </div>

            <div className="col-span-4 flex flex-col">
              <label className="font-bold text-[#1B6442]">شماره درخواست</label>
              <input
                {...register2("requestNumber")}
                className="border rounded-2xl p-2 mt-1"
                placeholder="در صورت وجود وارد کنید"
              />
            </div>
            <div className="col-span-4 flex flex-col">
              <label className="font-bold text-[#1B6442]">
                ظرفیت / میزان مصرف
              </label>
              <input
                type="number"
                {...register2("capacity", { required: "ظرفیت الزامی است" })}
                className="border rounded-2xl p-2 mt-1"
                placeholder="مثال: 5 KW"
              />
              {errors2.capacity && (
                <span className="text-red-500 text-sm">
                  {errors2.capacity.message}
                </span>
              )}
            </div>

            <div className="col-span-4 flex flex-col">
              <label className="font-bold text-[#1B6442]">نوع تعرفه</label>
              <select
                {...register2("tariffType", {
                  required: "نوع تعرفه الزامی است",
                })}
                className="border rounded-2xl mt-1 p-0.5"
              >
                <option value="">انتخاب کنید</option>
                <option value="معمولی">معمولی</option>
                <option value="زمان‌دار">زمان‌دار</option>
                <option value="صنعتی">صنعتی</option>
              </select>
              {errors2.tariffType && (
                <span className="text-red-500 text-sm">
                  {errors2.tariffType.message}
                </span>
              )}
            </div>

            <div className="col-span-4 flex flex-col">
              <label className="font-bold text-[#1B6442]">
                تاریخ شروع خدمت
              </label>
              <input
                type="date"
                {...register2("startDate")}
                className="border rounded-2xl p-2 mt-1"
              />
            </div>
            <div className="col-span-8 flex flex-col">
              <label className="font-bold text-[#1B6442]">آدرس انشعاب</label>
              <textarea
                {...register2("connectionAddress", {
                  required: "آدرس الزامی است",
                })}
                className="border rounded-2xl p-2 mt-1"
                placeholder="آدرس دقیق انشعاب را وارد کنید"
              />
              {errors2.connectionAddress && (
                <span className="text-red-500 text-sm">
                  {errors2.connectionAddress.message}
                </span>
              )}
            </div>
            <div className="col-span-12 flex justify-end">
              <button
                type="submit"
                className="px-8 bg-[#1B6442] text-white rounded-2xl py-2 mt-4 hover:border hover:border-[#1B6442] hover:bg-green-200 hover:text-green-600"
              >
                ثبت و ادامه
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default NewConnectionOne;

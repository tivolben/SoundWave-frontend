import { useState } from "react"


export default function Form() {

    const [nameInput, setNameInput] = useState('')
    const [phoneInput, setPhoneInput] = useState('')
    const [wishesInput, setWishesInput] = useState('')


    const handleSubmit = async (e) => {
    e.preventDefault();

    if(nameInput.trim().length !== 0 && phoneInput.trim().length !== 0) {
         const formData = {
        name: nameInput,
        phone: phoneInput,
        wishes: wishesInput
     }

     await fetch("https://soundwave-ao5y.onrender.com/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: nameInput,
    phone: phoneInput,
    wishes: wishesInput,
  }),
});

     setNameInput('')
     setPhoneInput('')
     setWishesInput('')

  console.log(formData);
    }
};


    return(
      <div className="bg-[#060606] w-full max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-white text-3xl md:text-5xl font-bold text-center mb-3">
        Оставьте заявку
      </h2>

      <p className="text-white text-lg md:text-2xl text-center mb-10">
        Мы свяжемся c вами и обсудим детали
      </p>

      <form
        onSubmit={handleSubmit}
        className="border border-[#1E1E1E] rounded-xl flex flex-col items-center gap-6 py-12 px-6 max-w-md mx-auto"
      >
        <input
          placeholder="Ваше имя"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="w-full h-12 px-3 border border-[#1E1E1E] text-gray-400"
        />

        <input
          placeholder="Ваш телефон"
          value={phoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
          className="w-full h-12 px-3 border border-[#1E1E1E] text-gray-400"
        />

        <input
          placeholder="Что хотите записать?"
          value={wishesInput}
          onChange={(e) => setWishesInput(e.target.value)}
          className="w-full h-12 px-3 border border-[#1E1E1E] text-gray-400"
        />

        <button
          type="submit"
          className="w-full h-12 bg-white text-black font-medium"
        >
          Отправить заявку
        </button>
      </form>
    </div>
    )
}
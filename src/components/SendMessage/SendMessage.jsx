import Button from "../Button";

export default function SendMessage() {
  return (
    <div className="text-sm sm:text-lg">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row sm:flex-col gap-4">
          <div className="flex gap-2 flex-col">
            <div className="text-start">
              <p className="text-white">Nome:</p>
              <label className="">
                <input
                  className="p-2 bg-white/80 sm:min-w-[400px] border-[1px] rounded-lg border-[#0ab9d1]"
                  type="text"
                />
              </label>
            </div>
            <div className="text-start">
              <p className="text-white">E-mail:</p>
              <label className="">
                <input
                  className="p-2  sm:min-w-[400px] bg-white/80 border-[1px] rounded-lg border-[#0ab9d1]"
                  type="text"
                />
              </label>
            </div>
            <div className="flex justify-center opacity-100 sm:hidden">
              <Button>Enviar mensagem</Button>
            </div>
          </div>
          <div className="text-start">
            <p className="text-white">Mensagem:</p>
            <label className="">
              <textarea
                className="p-1 sm:p-2 w-full h-40 sm:h-32 bg-white/80 border-[1px] rounded-lg border-[#0ab9d1]"
                type="text"
              />
            </label>
            <div className="hidden sm:flex sm:justify-center sm:pt-10">
              <Button>Enviar mensagem</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

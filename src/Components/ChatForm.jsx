import { SendRounded, BorderColorOutlined } from "@mui/icons-material";
import { UseApiContext } from "../Context/ApiContext";

const ChatForm = () => {
  const { handleSend, currentMsg, handleInput, startNewChat, sendIcon } =
    UseApiContext();
  return (
    <div className="w-full lg:h-[80px] h-[70px] flex items-center justify-between flex-col gap-2 absolute bottom-0">
      <form
        onSubmit={handleSend}
        className="w-full h-full flex items-center justify-center"
      >
        <div className="flex items-center justify-center lg:w-[80%] w-full gap-2 lg:gap-1">
          <input
            value={currentMsg}
            type="text"
            className="w-full rounded-3xl lg:text-lg lg:h-[49px] h-[42px] lg:font-semibold text-white placeholder-gray-200 outline-none px-5 bg-[#040E1A] shadow-md shadow-gray-600 border-[1px] border-gray-100"
            placeholder="Enter your Prompt here."
            onChange={handleInput}
          />
          <BorderColorOutlined
            onClick={startNewChat}
            sx={{
              fontSize: { xs: 30, lg: 40 },
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          <button type="submit">
            <SendRounded
              sx={{
                fontSize: { xs: 30, lg: 35 },
                display: sendIcon ? "block" : "none",
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                "&:hover": { transform: "scale(1.1)" },
              }}
            ></SendRounded>
          </button>
        </div>
      </form>
      <p className="lg:font-semibold lg:text-base text-sm">
        Developed by Muhammad Furqan.
      </p>
    </div>
  );
};

export default ChatForm;
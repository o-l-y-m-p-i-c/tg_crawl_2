import { useContext } from "react";
import { AppContext } from "../../providers/AppProvider";

const HypeModal = () => {
  const { modalData, closeModal } = useContext(AppContext);
  return modalData ? (
    <div
      className=""
      style={{
        padding: 10,
        boxShadow: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 20,
          padding: 10,
          paddingTop: 0,
          overflow: "auto",
          maxHeight: "85vh",
          flexDirection: "column",
          color: "#fff",
        }}
      >
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            background: "rgb(43, 32, 72,0.90)",
            zIndex: 100,
            margin: "0 -10px",
            padding: 10,
            gap: 20,
          }}
        >
          <h2>{modalData.label}</h2>
          <button
            className="button close-button"
            style={{
              marginBottom: "auto",
            }}
            onClick={closeModal}
          >
            <svg
              fill="#000000"
              height="15px"
              width="15px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 490 490"
              xmlSpace="preserve"
            >
              <polygon
                points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 
489.292,457.678 277.331,245.004 489.292,32.337 "
              ></polygon>
            </svg>
          </button>
        </div>
        <div
          className="flexContainer"
          style={{
            display: "flex",
            gap: 20,
            // flexWrap: "wrap",
          }}
        >
          <div
            className=""
            style={{
              flex: 0,
              minWidth: 100,
              margin: "0 auto",
            }}
          >
            <img
              src={modalData.image}
              style={{
                width: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                position: "sticky",
                top: 60,
                borderRadius: 10,
              }}
              alt=""
            />
          </div>
          <div
            className=""
            style={{
              flex: 1,
              minWidth: 100,
              overflowWrap: "anywhere",
            }}
          >
            <p>{modalData.msg}</p>
          </div>
        </div>
        <a
          className="button open-button"
          target={"blank"}
          href={`https://t.me/${modalData.telegram_username}`}
        >
          {console.log(modalData)}
          Open channel
        </a>
      </div>
    </div>
  ) : (
    <></>
  );
};

export { HypeModal };

const express = require("express");
const { SIWS } = require("@web3auth/sign-in-with-solana");
const serverless = require("serverless-http");

const app = express();
app.use(express.json());

const router = express.Router();

router.post("/verify-signature", async (req, res) => {
  try {
    const { payload, signature } = req.body;

    const header: { t: string } = {
      t: "",
    };

    header.t = "sip99";

    const msg = new SIWS({ header, payload });

    const resp = await msg.verify({ payload, signature });

    if (resp.success) {
      // <success flow>
      res
        .status(200)
        .send({ message: "Signature successfully verified.", data: resp });
    } else {
      // <error handling>
      res
        .status(400)
        .send({ message: "Signature verification failed.", error: resp });
    }
  } catch (error) {
    res.status(500).send({ message: "Server error.", error: error.message });
  }
});

app.use("/api/", router);

export const handler = serverless(app);

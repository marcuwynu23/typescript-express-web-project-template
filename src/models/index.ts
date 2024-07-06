import mongoose from "mongoose";
import schemas from "./schemas";

const Account = mongoose.model("Account", schemas.accountSchema);

export default {
    Account,
}
import axios from "axios";
import { MENU, CATEGORY, TAG, DETAIL } from "./urls";

export default {
  async getAllTags() {
    console.log("getAllTags");
    const url = CATEGORY;
    const res = await axios.get(CATEGORY);
    console.log("res", res);
    return res.data;
  },

  async getDetailWithId(id) {
    console.log("getDetailWithId", id);
    const url = `${DETAIL}&id=${id}`;
    const res = await axios.get(url);
    console.log("res", res);
    return res.data;
  },

  async getDataOfTag(tag) {
    console.log("getListOfTag", tag);
    const url = `${TAG}&cid=${tag}`;
    const res = await axios.get(url);
    console.log("res", res);
    return res.data;
  },

  async getDataOfKey(key) {
    console.log("getDataOfKey", key);
    const url = `${MENU}&key=${key}`;
    const res = axios.get(url);
    console.log("res", res);
    return res.data;
  }
};

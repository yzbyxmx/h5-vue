/**
 * created by xumx 2019/3/1
 * */

import Cookie from "js-cookie";
export default {
  methods: {
    cookie(name) {
      return Cookie.get(name);
    }
  }
};

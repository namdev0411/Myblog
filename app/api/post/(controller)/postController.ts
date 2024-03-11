import { TPost } from "@/app/post/(components)/Post";
import { postData } from "../dummyData";
import { TypedResponse } from "@/utils/type";

const postController = {
  getPostDetail: (postId: string): TypedResponse<TPost> => {
    const resData = postData.find((post) => post.id === postId);
    if (!resData) {
      return {
        errors: [
          {
            code: "404",
            message:
              "ページが見つかりません。システム管理者にお問合せください。",
          },
        ],
      };
    }
    return {
      data: resData,
    };
  },
  getPostList: (): TypedResponse<TPost[]> => {
    return {
      data: postData,
    };
  },
};

export default postController;

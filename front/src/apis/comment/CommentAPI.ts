import Axios from "apis/@core";
import { commentCardProps } from "components/Comment/CommentList/list/UpdateBtn";


type CommentFetchProps = {
   comment : string
   commentNum? : number
   boardNum? : number
}

<<<<<<< HEAD
const path = 'http://15.164.220.47:8080/v1/board/'
=======
const url = process.env.REACT_APP_BASE_URL
const path = `${url}v1/board/`
>>>>>>> c583def3023df4d9b457492810c32def89c99338

//댓글 리스트, 생성 , 수정 , 삭제 API
const CommentApi =  {
   
   getCommentApi(boardNum : number): Promise<any> {
      return Axios.get( path + `${boardNum}/comment/list`  )
   },
   createCommentApi(boardNum: number,data : CommentFetchProps): Promise<any> {
      return Axios.post(path + `${boardNum}/comment`,data)
   },

   updateCommentApi(comment : any): Promise<any> {
      return Axios.put(path + `${comment.boardNum}/comment/${comment.commentNum}`,comment)
   },

   deleteCommentApi(boardNum:number,commentNum:number): Promise<any> {
      return Axios.delete(path + `${boardNum}/comment/${commentNum}`)
   },
}


export default CommentApi;
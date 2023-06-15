import styled from 'styled-components';
import { commentKey } from "consts/queryKey";
import CommentApi from "apis/comment/CommentAPI";
import { useQuery } from "@tanstack/react-query";
import CommentCard from './CommentList/list/commentCard';
import CommentIndexPage from './CommentForm';


export type commentData = {
  data : {
    userEmail : string;
    boardNum : number,
    comment : string,
    commentNum : number,
    userId : number
    commentTime:string
  }
}

export type querycommentData = {
  data : commentData[]
}

function CommentList({boardNum} : { boardNum : number }) {
<<<<<<< HEAD
  const {data : commentist} = useQuery<querycommentData>([commentKey.GET_COMMENT_LIST], () => CommentApi.getCommentApi(boardNum));
  const ref = useRef<HTMLInputElement>(null);
  
  console.log(commentist);
  
=======
  const {data : commentList} = useQuery<querycommentData>([commentKey.GET_COMMENT_LIST,boardNum], () => CommentApi.getCommentApi(boardNum));
  const commentlength = commentList?.data.length || 0
>>>>>>> c583def3023df4d9b457492810c32def89c99338

  return (
    <Wrapper >
        <CommentIndexPage boardNum={boardNum} commentlength={commentlength}/>
      {
<<<<<<< HEAD
        commentist?.data.map((list : any ,index) => 
          <CommentCard data={list}/>
=======
        commentList?.data.map((list : any ,index) => 
          <CommentCard data={list} key={index}/>
>>>>>>> c583def3023df4d9b457492810c32def89c99338
      )}
    </Wrapper>
  )
}

export default CommentList

const Wrapper = styled.div`
   padding-top: 1.5rem;
   padding-bottom: 1.5rem;
`

import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8 bg-[#131315] text-gray-200">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;

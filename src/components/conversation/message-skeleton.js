import { Skeleton } from "@mui/material";
import {
  StyledMessage,
  StyledMessageBox,
  StyledMessageHeader,
  StyledMessageText,
  StyledSkeletonBox,
} from "./styles";

function DefaultSkeleton({ children }) {
  return (
    <StyledMessage>
      <Skeleton variant="circular" width={36} height={36} />
      <StyledMessageBox>
        <StyledMessageHeader>
          <Skeleton variant="text" width={150} height={30} />
        </StyledMessageHeader>
        <StyledMessageText>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {children}
          </div>
        </StyledMessageText>
      </StyledMessageBox>
    </StyledMessage>
  );
}

function MessageSkeleton({ skeleton }) {
  if (skeleton === 1)
    return (
      <DefaultSkeleton>
        <StyledSkeletonBox>
          <Skeleton variant="text" width={30} height={30} />
          <Skeleton variant="text" width={60} height={30} />
          <Skeleton variant="text" width={40} height={30} />
          <Skeleton variant="text" width={40} height={30} />
        </StyledSkeletonBox>
        <StyledSkeletonBox>
          <Skeleton variant="text" width={70} height={30} />
          <Skeleton variant="text" width={50} height={30} />
          <Skeleton variant="text" width={40} height={30} />
          <Skeleton variant="text" width={40} height={30} />
          <Skeleton variant="text" width={30} height={30} />
        </StyledSkeletonBox>
        <StyledSkeletonBox>
          <Skeleton variant="text" width={30} height={30} />
          <Skeleton variant="text" width={50} height={30} />
          <Skeleton variant="text" width={70} height={30} />
          <Skeleton variant="text" width={30} height={30} />
        </StyledSkeletonBox>
      </DefaultSkeleton>
    );
  if (skeleton === 2)
    return (
      <DefaultSkeleton>
        <StyledSkeletonBox>
          <Skeleton variant="text" width={30} height={30} />
          <Skeleton variant="text" width={60} height={30} />
          <Skeleton variant="text" width={40} height={30} />
          <Skeleton variant="text" width={40} height={30} />
        </StyledSkeletonBox>
        <StyledSkeletonBox>
          <Skeleton variant="text" width={70} height={30} />
        </StyledSkeletonBox>
        <StyledSkeletonBox>
          <Skeleton variant="rectangular" width={250} height={300} />
        </StyledSkeletonBox>
      </DefaultSkeleton>
    );
  return (
    <DefaultSkeleton>
      <StyledSkeletonBox>
        <Skeleton variant="text" width={30} height={30} />
        <Skeleton variant="text" width={60} height={30} />
        <Skeleton variant="text" width={70} height={30} />
        <Skeleton variant="text" width={50} height={30} />
      </StyledSkeletonBox>
    </DefaultSkeleton>
  );
}

export default MessageSkeleton;

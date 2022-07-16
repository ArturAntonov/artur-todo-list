import {useSelector} from "react-redux";
import {StoreState} from "../../redux/store";
import {Typography} from "@mui/material";
import {ColumnLayout} from "../ColumnLayout";
import {inProgressSlice} from "../../redux/slice/inProgress";

export const InProgressColumn = () => {
  const {inProgress} = useSelector((state: StoreState) => state)

  const {
    actions: {completeStatus, remove, add, updateTextShowed},
  } = inProgressSlice;

  return (
      <>
        <Typography mb={3}>All inProgress tasks: {inProgress.length}</Typography>
        <ColumnLayout
            droppableId='inProgress'
            labelText="Type 'in progress' item"
            completedHandler={completeStatus}
            removeHandler={remove}
            addHandler={add}
            selectorState={inProgress}
            updateTextShowed={updateTextShowed}
        />
      </>
  );
}

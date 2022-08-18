// To import context quicker
import { useContext } from 'react';
import AllContext from '../a-store/context-store/AllContext'

function AllCtx() {
  return (
  useContext(AllContext)
  )
}

export default AllCtx
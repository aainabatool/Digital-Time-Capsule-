import { useContext } from 'react';
import { CapsuleContext } from '../context/CapsuleContext';

const useCapsules = () => useContext(CapsuleContext);
export default useCapsules;

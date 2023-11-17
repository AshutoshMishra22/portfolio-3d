import { useState } from 'react';
import { DANGER } from '../constant';

const useAlert = () => {
	const [alert, setAlert] = useState({ show: false, text: '', type: DANGER });

	const showAlert = ({ text, type = DANGER }) =>
		setAlert({ show: true, text, type });
	const hideAlert = () => setAlert({ show: false, text: '', type: DANGER });
	return { alert, showAlert, hideAlert };
};

export default useAlert;

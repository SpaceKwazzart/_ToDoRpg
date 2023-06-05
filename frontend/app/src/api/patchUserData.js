import axios from 'axios';

export const patchUserData = async (customerId, updatedData) => {
    const response = await axios.patch(`/api/customers/${customerId}`, updatedData);
    return response.data;
}
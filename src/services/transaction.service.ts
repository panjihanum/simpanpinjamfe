import { axiosCustom } from 'config/axios.config'

const url = '/transaction'

async function getTransactionDetail(transactionId: string) {
  return await axiosCustom(`${url}/${transactionId}`)
}

export default {
  getTransactionDetail,
}

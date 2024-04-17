
class InternalUserService {

    // async getShopsAPI(business_id: number): Promise<any> {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const response = await axios.get(config.SERVICE.SERVICE_STOCKS_URL + `/shops/${business_id}`);
    //             const { data } = response.data;
    //             resolve(data);
    //         } catch (error) {
    //             reject(error);
    //         }
    //     });
    // };
}

export default new InternalUserService();
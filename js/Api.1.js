class Api {


    // Fetch data from API


    async getdata() {
        const response = await fetch(`https://api.covid19india.org/state_district_wise.json`);

        const responseData = await response.json();

        return responseData;
    }


}

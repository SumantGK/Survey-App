import axios from 'axios';

const INVENTORY_API_BASE_URL = "http://10.0.16.25:9096/api/v1";

class IMEIService {

    getIMEIs() {
        return axios.get(INVENTORY_API_BASE_URL);
    }

    getIMEIsByPage(page, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL
            + "/all/page?" + "page-no=" + page + "&records-per-page=" + rowsPerPage);
    }

    updateInventory(rate, id) {
        return axios.put(INVENTORY_API_BASE_URL + '/imei/update/' + id, rate);
    }


    getAllIMEICount() {
        return axios.get(INVENTORY_API_BASE_URL + '/imeis/count');
    }
   
    getAllIMEICountByStatus() {
        return axios.get(INVENTORY_API_BASE_URL + ' /device/status/count');
    }

    getNewIMEICount() {
        return axios.get(INVENTORY_API_BASE_URL + '/imeis/new');
    }

    getActiveIMEICount() {
        return axios.get(INVENTORY_API_BASE_URL + '/imeis/active');
    }

    getSuspendedIMEICount() {
        return axios.get(INVENTORY_API_BASE_URL + '/imeis/suspended');
    }

    getInactiveIMEICount() {
        return axios.get(INVENTORY_API_BASE_URL + '/imeis/inactive');
    }

    getLandingZoneCount() {
        return axios.get(INVENTORY_API_BASE_URL + '/imeis/landingzone/count');
    }

    getIMEIById(imeiId) {
        return axios.get(INVENTORY_API_BASE_URL + '/imeis/' + imeiId);
    }

    getRatePlans(pageNo, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/rates/all/page?page-no=' + pageNo + '&records-per-page=' + rowsPerPage);
    }

    getRateById(id) {
        return axios.get(INVENTORY_API_BASE_URL + '/rates/' + id);
    }

    addRate(rate) {
        return axios.post(INVENTORY_API_BASE_URL + '/addrate', rate);
    }

    updateRate(rate, id) {
        return axios.put(INVENTORY_API_BASE_URL + '/updaterate/' + id, rate);
    }

    searchRate(keyword, pageNo, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/rates/search/' + encodeURIComponent(keyword.trim()) + '?page-no=' + pageNo + '&records-per-page=' + rowsPerPage)
    }

    getPlans(pageNo, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/plans/all/page?page-no=' + pageNo + '&records-per-page=' + rowsPerPage);
    }

    getPlanById(id) {
        return axios.get(INVENTORY_API_BASE_URL + '/plans/' + id);
    }

    addPlan(rate) {
        return axios.post(INVENTORY_API_BASE_URL + '/addplan', rate);
    }

    updatePlan(rate, id) {
        return axios.put(INVENTORY_API_BASE_URL + '/updateplan/' + id, rate);
    }

    searchPlan(keyword, pageNo, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/plans/search/' + encodeURIComponent(keyword.trim()) + '?page-no=' + pageNo + '&records-per-page=' + rowsPerPage)
    }

    getEvents(pageNo, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/events/all/page?page-no=' + pageNo + '&records-per-page=' + rowsPerPage);
    }

    getEventById(id) {
        return axios.get(INVENTORY_API_BASE_URL + '/events/' + id);
    }

    addEvent(event) {
        return axios.post(INVENTORY_API_BASE_URL + '/events/add', event);
    }

    updateEvent(event, id) {
        return axios.put(INVENTORY_API_BASE_URL + '/events/update/' + id, event);
    }

    searchKeywordInEvent(search, pageNo, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/events/search/' + search + '?page-no=' + pageNo + '&records-per-page=' + rowsPerPage);
    }

    //http://localhost:8080/api/v1/provisioning/all/page?page-no=1&records-per-page=5&prov-type=create
    getProvisioningCreateFiles(pageNo, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/provisioning/all/page?page-no=' + pageNo + '&records-per-page=' + rowsPerPage + '&prov-type=provcreate');
    }

    getProvisioningBatchDetails(id) {
        return axios.get(INVENTORY_API_BASE_URL + '/provisioning/all/fileDetailsId/' + id);
    }

    getProvisioningUpdateFiles(pageNo, rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/provisioning/all/page?page-no=' + pageNo + '&records-per-page=' + rowsPerPage + '&prov-type=provupdate');
    }

    getToken(loginRequest) {
        return  axios.post("/api/auth/signin", loginRequest)
    }
    getDiscounts(pageNo,rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/discount/all/page?page-no=' + pageNo + '&records-per-page=' + rowsPerPage);
    }

    getDiscountById(id) {
        return axios.get(INVENTORY_API_BASE_URL + '/discount/' + id);
    }

    createDiscount(discount) {
        return axios.post(INVENTORY_API_BASE_URL + '/discount/create',discount);
    }

    updateDiscount(discount,id) {
        return axios.put(INVENTORY_API_BASE_URL + '/discount/update/' + id,discount);
    }

    getGLIDs(pageNo,rowsPerPage) {
        return axios.get(INVENTORY_API_BASE_URL + '/glid/all/page?page-no=' + pageNo + '&records-per-page=' + rowsPerPage);
    }
}

export default new IMEIService();
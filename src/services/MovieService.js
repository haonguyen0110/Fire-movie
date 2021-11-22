import { GROUPID } from "../util/config";
import { BaseService } from "./BaseServices";


export class MovieService extends BaseService {
    constructor() {
        super();
    }



    getMovie = (tenPhim = '') => {
        if (tenPhim.trim() != '') {
            return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`)
        }
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }

}


export const movieService = new MovieService();

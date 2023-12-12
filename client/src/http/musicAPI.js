import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type);
    return data;
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type');
    return data;
}

export const deleteType = async (id) => {
    const {data} = await $authHost({method:'DELETE', url:'api/type/'+id});
    return data;
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand);
    return data;
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand');
    return data;
}

export const deleteBrand = async (id) => {
    const {data} = await $authHost({method:'DELETE', url:'api/brand/'+id});
    return data;
}

export const createMusic = async (brand) => {
    const {data} = await $authHost.post('api/music', brand);
    return data;
}

export const fetchMusic = async (typeId, brandId, page, limit = 9) => {
    const {data} = await $host.get('api/music', {params: {
            typeId, brandId, page, limit
        }});
    return data;
}

export const fetchOneMusic = async (id) => {
    const {data} = await $host.get(`api/music/${id}`);
    return data;
}

export const fetchDeleteMusic = async (id) => {
    const {data} = await $authHost({method:'DELETE', url:`api/music/${id}`});
    return data;
}

export const updateMusics = async (id, body) => {
    const {data} = await $authHost({method:'PUT', url:`api/music/${id}`, data: body});
    return data;
}

export const getAllMusicsInAdminPage = async (name, page = 1, filter = "All") => {
    const {data} = await $authHost({method:'GET', url:`api/music/search?page=${page}&name=${name}&filter=${filter}`});
    return data;
}

export const addMusicToPlaylist = async (music) => {
    const {data} = await $authHost.post('api/playlist', music);
    return data;
}

export const getMusicFromPlaylist = async () => {
    const {data} = await $authHost.get('api/playlist');
    return data;
}

export const deleteMusicFromPlaylist = async (id) => {
    const {data} = await $authHost.delete(`api/playlist/${id}`);
    return data;
}

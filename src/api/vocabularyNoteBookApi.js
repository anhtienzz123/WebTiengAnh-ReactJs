import axiosClient from "./axiosClient";

const URL_API = "/vocabularynotebook";

const vocabularyNoteBookApi = {



    fetchVocabularyNoteBookOfMe: (page, size) => {
        const url = `${URL_API}/of/me`;
        return axiosClient.get(url, {
            params: {
                page,
                size
            }
        });
    },
    fetchVocabularyNoteBookCommonInfo: () => {
        const url = `${URL_API}/common/info`;
        return axiosClient.get(url);
    },
    fetchVocabularyNoteBookBySlug: slug => {

        const url = `${URL_API}/${slug}`;

        return axiosClient.get(url);
    },
    fetchWordBySlug: (slug, wordIds) => {

        const url = `${URL_API}/${slug}/OnTapDienTu`;

        return axiosClient.get(url, {
            params: {
                wordIds
            }
        });
    },
    fetchCourseReviewInfoBySlug: slug => {

        const url = `${URL_API}/${slug}/ontapdientu/info`;

        return axiosClient.get(url);
    }


}

export default vocabularyNoteBookApi;
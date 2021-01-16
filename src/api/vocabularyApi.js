import axiosClient from "./axiosClient";

const vocabularyApi = {
    getVocabulary: (vocabularyName) => {
        const url = `/Vocabulary/${vocabularyName}`;
        return axiosClient.get(url);
    },

}

export default vocabularyApi;
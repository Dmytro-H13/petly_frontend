const getNotices = state => state.notices.notices;

const getNoticeAdded = state => state.notices.noticeAdded;

const getNoticeRemoved = state => state.notices.noticeRemoved;

const getNoticeInformationMore = state => state.notices.noticeInformationMore;
const noticeLoading = state => state.notices.loading;

const getNoticeAddError = state => state.notices.getNoticeAddError;

const getNoticeError = state => state.notices.error;

const noticesSelectors = {
  getNotices,
  getNoticeAdded,
  getNoticeRemoved,
  getNoticeInformationMore,
  noticeLoading,
  getNoticeError,
  getNoticeAddError,
};
export default noticesSelectors;

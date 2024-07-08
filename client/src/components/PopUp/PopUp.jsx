const PopUp = ({ title, message, confirm, denied }) => {
  return (
    <>
      <div className="modal modal-sheet position-absolute d-block p-4 mt-5">
        <div className="modal-dialog">
          <div className="modal-content rounded-3 shadow">
            <div className="modal-body text-center">
              <h5 className="mb-0">{title}</h5>
              <p className="mb-0">{message}</p>
            </div>
            <div className="modal-footer flex-nowrap p-0">
              <button
                className="btn btn-link text-decoration-none col-6 py-3 m-0 rounded-0 border-end"
                onClick={confirm}
              >
                Oui
              </button>
              <button
                className="btn btn-link text-decoration-none col-6 py-3 m-0 rounded-0"
                onClick={denied}
              >
                <strong>Non</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;

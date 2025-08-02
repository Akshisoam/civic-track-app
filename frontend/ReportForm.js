// frontend/ReportForm.js
import React from 'react';

function ReportForm() {
    return (
        <form>
            <input type="text" placeholder="Issue title" />
            <textarea placeholder="Description"></textarea>
            <input type="file" multiple />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ReportForm;

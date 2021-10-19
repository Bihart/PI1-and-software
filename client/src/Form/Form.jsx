import React from 'react';

function Form(){
    return (
        <div>
            <form method="POST">
                <div>
                    <label htmlFor="upgrade_file">
                      Select the file to send:
                        <input type="file"
                            id="upgrade_file"
                            name="upgrade_file"
                            accept=".csv, .json, .xml"/>
                    </label>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export { Form };

import React from 'react';

function Form(){
    return (
        <div class="container">
            <form method="#" class="container--form">
                <div>
                    <label for="upgrade_file">
                        Select the file to send
                    </label>
                    <input type="file"
                        id="upgrade_file"
                        name="upgrade_file"
                        className="upgrade_file"
                        accept=".csv, .json, .xml"/>
                </div>
                <div>
                    <button class="container--submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export { Form };

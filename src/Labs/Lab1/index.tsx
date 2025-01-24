export default function Lab1() {
    return (
        <div>
            <h2> Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>This is a Heading Tag</h4>
                Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
            </div>

            <div id="wd-p-tag">
                <h4>This is a Paragraph Tag</h4>
                <p id="wd-p-1">
                    This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
                </p>
            </div>

            <div id="wd-p-tag">
                <h4>Paragraph Spacing</h4>
                <p id="wd-p-1"> </p>
                <p id="wd-p-2">
                    This is the first paragraph. The paragraph tag is used to format
                    vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-3">
                    This is the second paragraph. Even though there is a deliberate white
                    gap between the paragraph above and this paragraph, by default
                    browsers render them as one contiguous piece of text as shown here on
                    the right.
                </p>
                <p id="wd-p-4">
                    This is the third paragraph. Wrap each paragraph with the paragraph
                    tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>Lists</h4>
                <h5>This list will not format correctly</h5>
                How to make pancakes:
                1. Mix dry ingredients.
                2. Add wet ingredients.
                3. Stir to combine.
                4. Heat a skillet or griddle.
                5. Pour batter onto the skillet.
                6. Cook until bubbly on top.
                7. Flip and cook the other side.
                8. Serve and enjoy!
            </div>
            <div id="wd-lists">
                <h5>This list will format correctly</h5>
                How to make pancakes:
                <ol>
                    <li> Mix dry ingredients.</li> <li>
                        Add wet ingredients.</li> <li>
                        Stir to combine.</li> <li>
                        Heat a skillet or griddle.</li> <li>
                        Pour batter onto the skillet.</li> <li>
                        Cook until bubbly on top.</li> <li>
                        Flip and cook the other side.</li> <li>
                        Serve and enjoy!</li>
                </ol>
            </div>
            <h5>Unordered List</h5>
            Some books (in no particular order)
            <ul id="wd-my-books">
                <li>Dune</li>
                <li>Lord of the Rings</li>
                <li>Ender's Game</li>
                <li>Red Mars</li>
                <li>The Forever War</li>
            </ul>
            My favorite books (in order)
            <ul id="wd-my-books">
                <li>The Stand</li>
                <li>The Life of Pi</li>
                <li>One Flew Over the Cuckoos Nest</li>
                <li>Hunger Games</li>
                <li>A Handmaids Tale</li>
            </ul>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>Java</td>
                            <td>2/14/21</td>
                            <td>89</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>JavaScript</td>
                            <td>2/19/21</td>
                            <td>78</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>Python</td>
                            <td>2/21/21</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Processing</td>
                            <td>2/27/21</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>C</td>
                            <td>3/1/21</td>
                            <td>84</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>R</td>
                            <td>3/12/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Ruby</td>
                            <td>3/16/21</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>Rust</td>
                            <td>3/24/21</td>
                            <td>96</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>86.5</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet: <br />
                <img id="wd-starship" width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
            </div>

            <div id="wd-forms">
                <h4>Form Elements</h4>
                <label htmlFor="wd-username">Username:</label>
                <input
                    id="wd-username"
                    name="wd-username"
                    type="text"
                    placeholder="JDoe"
                    title="Please type your first initial followed by your last name"
                />
                <br />
                <label htmlFor="wd-password">Password:</label>
                <input type="password" />
                <br />
                <label htmlFor="wd-first">First name:</label>
                <input
                    id="wd-first"
                    name="wd-first"
                    type="text"
                    title="Please type your first name"
                /> <br />
                <label htmlFor="wd-last">Last name:</label>
                <input
                    id="wd-last"
                    name="wd-last"
                    type="text"
                    title="Please type your last name"
                /> <br />
                <label htmlFor="wd-salary">Salary:</label>
                <input id="wd-salary" type="number" min="5" max="100" />

            </div>
            <h5>Text boxes</h5>
            <label>Biography:</label><br />
            <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>

            <h5 id="wd-buttons">Buttons</h5>
            <button type="button"
                onClick={() => alert("Life is Good!")}
                id="wd-all-good">
                Hello World!
            </button>

            <div>
                <h4>Radio Buttons</h4>
                Choose your favorite movie genre <br />
                <input id="wd-comedy" type="radio" name="wd-genre" />
                <label htmlFor="wd-comedy">Comedy</label> <br />
                <input id="wd-drama" type="radio" name="wd-genre" /> <label htmlFor="wd-drama">Drama</label>  <br />
                <input id="wd-sci-fi" type="radio" name="wd-genre" /> <label htmlFor="wd-sci-fi">Sci-Fi</label>  <br />
                <input id="wd-horror" type="radio" name="wd-genre" /><label htmlFor="wd-horror">Horror</label>  <br />
                <input id="wd-romance" type="radio" name="wd-genre" /> <label htmlFor="wd-romance">Romance</label> <br />
                Choose your favorite color <br />
                <label> <input type="radio" name="wd-color" />Red  </label> <br />
                <label> <input type="radio" name="wd-color" />Green  </label> <br />
                <label> <input type="radio" name="wd-color" />Blue </label> <br />
                <label> <input type="radio" name="wd-color" />Yellow </label> <br />
                <label> <input type="radio" name="wd-color" />Purple </label>

            </div>

            <div>
                <h5 id="wd-checkboxes">Checkboxes</h5>
                <label>Top 3 Movie Genres:</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
                <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
                <label htmlFor="wd-chkbox-drama">Drama</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label> <br />


                <input type="checkbox" name="check-genre" id="wd-chkbox-horror" />
                <label htmlFor="wd-chkbox-horror">Horror</label> <br />


                <input type="checkbox" name="check-genre" id="wd-chkbox-romance" />
                <label htmlFor="wd-chkbox-romance">Romance</label>
            </div>

            <div>
                <h4 id="wd-dropdowns">Dropdowns</h4>

                <h5>Select one</h5>
                <label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br />
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">
                        Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h5>Select many</h5>
                <label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br />
                <select multiple id="wd-select-many-genre">
                    <option value="COMEDY" selected> Comedy          </option>
                    <option value="DRAMA">           Drama           </option>
                    <option value="SCIFI" selected> Science Fiction </option>
                    <option value="FANTASY">         Fantasy         </option>
                </select>
            </div>

            <h4>Other HTML field types</h4>

            <label htmlFor="wd-text-fields-email"> Email: </label>
            <input type="email"
                placeholder="jdoe@somewhere.com"
                id="wd-text-fields-email" /><br />

            <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
            <input type="number"
                value="100000"
                placeholder="1000"
                id="wd-text-fields-salary-start" /><br />

            <label htmlFor="wd-text-fields-rating"> Rating: </label>
            <input type="range"
                value="4"
                max="5"
                placeholder="Doe"
                id="wd-text-fields-rating" /><br />

            <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
            <input type="date"
                value="2000-01-21"
                id="wd-text-fields-dob" /><br />

            <h4>Anchor tag</h4>
            Please
            <a href="https://www.lipsum.com" id="wd-lipsum">click here</a>
            to get dummy text<br />
            <h4>Anchor tag</h4>
            Please
            <a href="https://github.com/standard-t" id="wd-github">click here</a>
            to get view my github<br />
        </div>

    );
}
// #==================================#
// #      toolbox-collapsible         #
// #==================================#

var coll = document.getElementsByClassName("toolbox-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function(e) {
        this.classList.toggle("toolbox-hit");
        var content = this.nextElementSibling;
        let symbol = e.target.querySelector(".material-symbols-outlined")
        let totaldownloads = e.target.querySelector(".totaldownloads")
        if (content.style.maxHeight === "1000px") {
            content.style.transition = "max-height .3s"
            content.style.maxHeight = "0px";
            if (symbol) symbol.style = "transform: rotate(0deg);"
            if (totaldownloads) content.style.maxHeight = "0px";
        } else {
            content.style.transition = "max-height 1s"
            content.style.maxHeight = "1000px";
            if (symbol) symbol.style = "transform: rotate(90deg);"
            if (totaldownloads) content.style.maxHeight = "1000px";
        }
    });
}

let toolboxDiv = document.getElementById("notepad-toolbox1");
let toolboxDownloadBtn = document.getElementById("toolbox-download-btn");
let codeWindow = document.getElementById("lua-codewindow")
let downloadBtn = document.getElementById("toolbox-download-btn");

function toggleHome(state) {
    // toggle home/landing page elemts on/off
    if (toolboxDiv == null) {
        return;
    }

    if (state) {
        toolboxDiv.style.display = "none";
        toolboxDownloadBtn.style.display = "none";
        //codeWindow.contentEditable = false;
        codeWindow.style.filter = "blur(0)";
    } else {

        toolboxDiv.style.display = "block";
        toolboxDownloadBtn.style.display = "block";
        //codeWindow.contentEditable = true;
        codeWindow.style.filter = "blur(0)";
    }
}

// load on playground ONLY?
//window.onload = function() {
// #==================================#
// #            UI Button             #
// #==================================#

let isObfuscating = false

function startObfuscation() {
    if (isObfuscating)
        return false

    codeWindow.style.filter = "blur(3px)";
    isObfuscating = true;
    return true
}

function stopObfuscation() {
    if (!isObfuscating)
        return false

    codeWindow.style.filter = "blur(0px)";
    isObfuscating = false;
    return true
}

let gtagz = "adsbygoogle";
let luafile = document.getElementById("lua-file")
if (luafile != null) {
    // NOTE: only load on index?
    // TODO: improve
    downloadBtn.addEventListener("click", function(e) {
        var a = document.createElement('a');
        var blob = new Blob([document.getElementById("lua-codewindow").innerText], { "type": "text/plain" });
        a.href = window.URL.createObjectURL(blob);
        a.download = "obf_" + luaEngine.getSessionId() + ".lua";
        a.click();
    });


    // landing page buttons
    document.getElementById("btn-demo").addEventListener("click", function(e) {
        if (!isObfuscating) {
            //luaEngine.init(frontcallback, flags, true); // empty to get demo
            //just for the demo lol 
            toggleHome()
            codeWindow.innerHTML = `
            <code id="lua-codewindow" class="lang-lua" contenteditable="false" spellcheck="false" style="filter: blur(0px);"><span class="c_green" id="token-0">--[[
Welcome to LuaObfuscator.com   (Alpha 0.2.5) ~  Much Love, Ferib 
]]</span><span class="c_green" id="token-1">--
</span><span class="" id="token-2">
</span><span class="c_green" id="token-3">-- Example Code:
</span><span class="c_blue" id="token-4">local</span><span class="" id="token-5"> </span><span contenteditable="true" class="c_ref-6 c_white" id="token-6">a</span><span class="" id="token-7"> </span><span class="c_pink" id="token-8">=</span><span class="" id="token-9"> </span><span class="c_pink" id="token-10">(</span><span class="c_pink" id="token-11">(</span><span class="c_purple" id="token-12">16164</span><span class="" id="token-13"> </span><span class="c_pink" id="token-14">+</span><span class="" id="token-15"> </span><span class="c_pink" id="token-16">(</span><span class="c_pink" id="token-17">(</span><span class="c_pink" id="token-18">(</span><span class="c_purple" id="token-19">3864</span><span class="" id="token-20"> </span><span class="c_pink" id="token-21">+</span><span class="" id="token-22"> </span><span class="c_purple" id="token-23">364101</span><span class="c_pink" id="token-24">)</span><span class="" id="token-25"> </span><span class="c_pink" id="token-26">-</span><span class="" id="token-27"> </span><span class="c_purple" id="token-28">274396</span><span class="c_pink" id="token-29">)</span><span class="" id="token-30"> </span><span class="c_pink" id="token-31">-</span><span class="" id="token-32"> </span><span class="c_purple" id="token-33">67600</span><span class="c_pink" id="token-34">)</span><span class="c_pink" id="token-35">)</span><span class="" id="token-36"> </span><span class="c_pink" id="token-37">+</span><span class="" id="token-38"> </span><span class="c_pink" id="token-39">(</span><span class="c_purple" id="token-40">190952</span><span class="" id="token-41"> </span><span class="c_pink" id="token-42">-</span><span class="" id="token-43"> </span><span class="c_purple" id="token-44">110638</span><span class="c_pink" id="token-45">)</span><span class="c_pink" id="token-46">)</span><span class="" id="token-47">
</span><span contenteditable="true" class="c_ref-48 c_white" id="token-48">a</span><span class="" id="token-49"> </span><span class="c_pink" id="token-50">=</span><span class="" id="token-51"> </span><span contenteditable="true" class="c_ref-6 c_white" id="token-52">a</span><span class="" id="token-53"> </span><span class="c_pink" id="token-54">+</span><span class="" id="token-55"> </span><span class="c_pink" id="token-56">(</span><span class="c_pink" id="token-57">(</span><span class="c_purple" id="token-58">113</span><span class="" id="token-59"> </span><span class="c_pink" id="token-60">-</span><span class="" id="token-61"> </span><span class="c_pink" id="token-62">(</span><span class="c_purple" id="token-63">26</span><span class="" id="token-64"> </span><span class="c_pink" id="token-65">+</span><span class="" id="token-66"> </span><span class="c_purple" id="token-67">67</span><span class="c_pink" id="token-68">)</span><span class="c_pink" id="token-69">)</span><span class="" id="token-70"> </span><span class="c_pink" id="token-71">+</span><span class="" id="token-72"> </span><span class="c_pink" id="token-73">(</span><span class="c_purple" id="token-74">1219</span><span class="" id="token-75"> </span><span class="c_pink" id="token-76">-</span><span class="" id="token-77"> </span><span class="c_pink" id="token-78">(</span><span class="c_purple" id="token-79">119</span><span class="" id="token-80"> </span><span class="c_pink" id="token-81">+</span><span class="" id="token-82"> </span><span class="c_purple" id="token-83">997</span><span class="c_pink" id="token-84">)</span><span class="c_pink" id="token-85">)</span><span class="c_pink" id="token-86">)</span><span class="" id="token-87"> </span><span class="c_green" id="token-88">-- Example obfuscation
</span><span class="" id="token-89">
</span><span class="c_green" id="token-90">-- To hide your precious values, try obfuscating them!
</span><span class="c_green" id="token-91">-- Click the [Literals] button in the upper-right corner
</span><span class="c_blue" id="token-92">local</span><span class="" id="token-93"> </span><span contenteditable="true" class="c_ref-94 c_white" id="token-94">b</span><span class="" id="token-95"> </span><span class="c_pink" id="token-96">=</span><span class="" id="token-97"> </span><span class="c_purple" id="token-98">1203456</span><span class="" id="token-99">
</span><span class="c_blue" id="token-100">local</span><span class="" id="token-101"> </span><span contenteditable="true" class="c_ref-102 c_white" id="token-102">c</span><span class="" id="token-103"> </span><span class="c_pink" id="token-104">=</span><span class="" id="token-105"> </span><span class="c_purple" id="token-106">1230471</span><span class="" id="token-107">
</span><span class="c_blue" id="token-108">local</span><span class="" id="token-109"> </span><span contenteditable="true" class="c_ref-110 c_white" id="token-110">d</span><span class="" id="token-111"> </span><span class="c_pink" id="token-112">=</span><span class="" id="token-113"> </span><span class="c_purple" id="token-114">8023481</span><span class="" id="token-115">

</span><span class="c_green" id="token-116">-- The below if-statement is opque and can be predicted as
</span><span class="c_green" id="token-117">-- all conditions are staticly defined
</span><span class="c_blue" id="token-118">if</span><span class="" id="token-119"> </span><span contenteditable="true" class="c_ref-102 c_white" id="token-120">c</span><span class="" id="token-121"> </span><span class="c_pink" id="token-122">&gt;</span><span class="" id="token-123"> </span><span contenteditable="true" class="c_ref-94 c_white" id="token-124">b</span><span class="" id="token-125"> </span><span class="c_blue" id="token-126">then</span><span class="" id="token-127">
    </span><span class="c_white" id="token-128">print</span><span class="c_pink" id="token-129">(</span><span class="c_yellow" id="token-130">"true"</span><span class="c_pink" id="token-131">)</span><span class="" id="token-132">
</span><span class="c_blue" id="token-133">end</span><span class="" id="token-134">

</span><span class="c_green" id="token-135">-- You may want to obfuscate such if-statements by using
</span><span class="c_green" id="token-136">-- the [Junk-If] button in the upper right corner
</span><span class="c_blue" id="token-137">if</span><span class="" id="token-138"> </span><span class="c_purple" id="token-139">1</span><span class="" id="token-140"> </span><span class="c_pink" id="token-141">+</span><span class="" id="token-142"> </span><span contenteditable="true" class="c_ref-110 c_white" id="token-143">d</span><span class="" id="token-144"> </span><span class="c_pink" id="token-145">&gt;</span><span class="" id="token-146"> </span><span contenteditable="true" class="c_ref-102 c_white" id="token-147">c</span><span class="" id="token-148"> </span><span class="c_blue" id="token-149">then</span><span class="" id="token-150">
    </span><span class="c_white" id="token-151">print</span><span class="c_pink" id="token-152">(</span><span class="c_yellow" id="token-153">"obfuscate the conditions!"</span><span class="c_pink" id="token-154">)</span><span class="" id="token-155">
</span><span class="c_blue" id="token-156">end</span><span class="" id="token-157">

</span><span class="c_green" id="token-158">-- Next is [Strings], which will encrypt all strings but adds
</span><span class="c_green" id="token-159">-- extra code to decrypt them at runtime.
</span><span class="c_white" id="token-160">print</span><span class="c_pink" id="token-161">(</span><span class="c_yellow" id="token-162">"Clicking [Strings] will completely hide this string!"</span><span class="c_pink" id="token-163">)</span><span class="" id="token-164">

</span><span class="c_green" id="token-165">-- Another important thing is to hide the order of things that get executed
</span><span class="c_green" id="token-166">-- to confuse an attacker using Control Flow Flattening. With [CFF v1] we can hide
</span><span class="c_green" id="token-167">-- the control flow of the following blocks.
</span><span class="c_blue" id="token-168">do</span><span class="" id="token-169">
    </span><span class="c_blue" id="token-170">function</span><span class="" id="token-171"> </span><span class="c_white" id="token-172">sieve_of_eratosthenes</span><span class="c_pink" id="token-173">(</span><span contenteditable="true" class="c_ref-174 c_white" id="token-174">n</span><span class="c_pink" id="token-175">)</span><span class="" id="token-176">
    </span><span class="c_blue" id="token-177">local</span><span class="" id="token-178"> </span><span contenteditable="true" class="c_ref-179 c_white" id="token-179">is_prime</span><span class="" id="token-180"> </span><span class="c_pink" id="token-181">=</span><span class="" id="token-182"> </span><span class="c_pink" id="token-183">{</span><span class="" id="token-184"> </span><span class="c_pink" id="token-185">}</span><span class="" id="token-186">
        </span><span class="c_blue" id="token-187">for</span><span class="" id="token-188"> </span><span contenteditable="true" class="c_ref-189 c_white" id="token-189">i</span><span class="" id="token-190"> </span><span class="c_pink" id="token-191">=</span><span class="" id="token-192"> </span><span class="c_purple" id="token-193">1</span><span class="c_pink" id="token-194">,</span><span class="" id="token-195"> </span><span contenteditable="true" class="c_ref-174 c_white" id="token-196">n</span><span class="" id="token-197"> </span><span class="c_blue" id="token-198">do</span><span class="" id="token-199">
            </span><span contenteditable="true" class="c_ref-179 c_white" id="token-200">is_prime</span><span class="c_pink" id="token-201">[</span><span contenteditable="true" class="c_ref-189 c_white" id="token-202">i</span><span class="c_pink" id="token-203">]</span><span class="" id="token-204"> </span><span class="c_pink" id="token-205">=</span><span class="" id="token-206"> </span><span class="c_purple" id="token-207">1</span><span class="" id="token-208"> </span><span class="c_pink" id="token-209">~=</span><span class="" id="token-210"> </span><span contenteditable="true" class="c_ref-189 c_white" id="token-211">i</span><span class="" id="token-212">
        </span><span class="c_blue" id="token-213">end</span><span class="" id="token-214">
        </span><span class="c_blue" id="token-215">for</span><span class="" id="token-216"> </span><span contenteditable="true" class="c_ref-217 c_white" id="token-217">i</span><span class="" id="token-218"> </span><span class="c_pink" id="token-219">=</span><span class="" id="token-220"> </span><span class="c_purple" id="token-221">2</span><span class="c_pink" id="token-222">,</span><span class="" id="token-223"> </span><span class="c_white" id="token-224">math</span><span class="c_pink" id="token-225">.</span><span class="c_white" id="token-226">floor</span><span class="c_pink" id="token-227">(</span><span class="c_white" id="token-228">math</span><span class="c_pink" id="token-229">.</span><span class="c_white" id="token-230">sqrt</span><span class="c_pink" id="token-231">(</span><span contenteditable="true" class="c_ref-174 c_white" id="token-232">n</span><span class="c_pink" id="token-233">)</span><span class="c_pink" id="token-234">)</span><span class="" id="token-235"> </span><span class="c_blue" id="token-236">do</span><span class="" id="token-237">
            </span><span class="c_blue" id="token-238">if</span><span class="" id="token-239"> </span><span contenteditable="true" class="c_ref-179 c_white" id="token-240">is_prime</span><span class="c_pink" id="token-241">[</span><span contenteditable="true" class="c_ref-217 c_white" id="token-242">i</span><span class="c_pink" id="token-243">]</span><span class="" id="token-244"> </span><span class="c_blue" id="token-245">then</span><span class="" id="token-246">
                </span><span class="c_blue" id="token-247">for</span><span class="" id="token-248"> </span><span contenteditable="true" class="c_ref-249 c_white" id="token-249">j</span><span class="" id="token-250"> </span><span class="c_pink" id="token-251">=</span><span class="" id="token-252"> </span><span contenteditable="true" class="c_ref-217 c_white" id="token-253">i</span><span class="c_pink" id="token-254">*</span><span class="" id="token-255"> </span><span contenteditable="true" class="c_ref-217 c_white" id="token-256">i</span><span class="c_pink" id="token-257">,</span><span class="" id="token-258"> </span><span contenteditable="true" class="c_ref-174 c_white" id="token-259">n</span><span class="c_pink" id="token-260">,</span><span class="" id="token-261"> </span><span contenteditable="true" class="c_ref-217 c_white" id="token-262">i</span><span class="" id="token-263"> </span><span class="c_blue" id="token-264">do</span><span class="" id="token-265">
                    </span><span contenteditable="true" class="c_ref-179 c_white" id="token-266">is_prime</span><span class="c_pink" id="token-267">[</span><span contenteditable="true" class="c_ref-249 c_white" id="token-268">j</span><span class="c_pink" id="token-269">]</span><span class="" id="token-270"> </span><span class="c_pink" id="token-271">=</span><span class="" id="token-272"> </span><span class="c_blue" id="token-273">false</span><span class="" id="token-274">
                </span><span class="c_blue" id="token-275">end</span><span class="" id="token-276">
            </span><span class="c_blue" id="token-277">end</span><span class="" id="token-278">
        </span><span class="c_blue" id="token-279">end</span><span class="" id="token-280">
        </span><span class="c_blue" id="token-281">return</span><span class="" id="token-282"> </span><span contenteditable="true" class="c_ref-179 c_white" id="token-283">is_prime</span><span class="" id="token-284">
    </span><span class="c_blue" id="token-285">end</span><span class="" id="token-286">
    </span><span class="c_blue" id="token-287">local</span><span class="" id="token-288"> </span><span contenteditable="true" class="c_ref-289 c_white" id="token-289">primes</span><span class="" id="token-290"> </span><span class="c_pink" id="token-291">=</span><span class="" id="token-292"> </span><span class="c_white" id="token-293">sieve_of_eratosthenes</span><span class="c_pink" id="token-294">(</span><span class="c_purple" id="token-295">420</span><span class="c_pink" id="token-296">)</span><span class="" id="token-297">
    </span><span class="c_blue" id="token-298">for</span><span class="" id="token-299"> </span><span contenteditable="true" class="c_ref-300 c_white" id="token-300">key</span><span class="c_pink" id="token-301">,</span><span class="" id="token-302"> </span><span contenteditable="true" class="c_ref-303 c_white" id="token-303">value</span><span class="" id="token-304"> </span><span class="c_blue" id="token-305">in</span><span class="" id="token-306"> </span><span class="c_white" id="token-307">pairs</span><span class="c_pink" id="token-308">(</span><span contenteditable="true" class="c_ref-289 c_white" id="token-309">primes</span><span class="c_pink" id="token-310">)</span><span class="" id="token-311"> </span><span class="c_blue" id="token-312">do</span><span class="" id="token-313">
        </span><span class="c_blue" id="token-314">if</span><span class="" id="token-315"> </span><span class="c_pink" id="token-316">(</span><span contenteditable="true" class="c_ref-303 c_white" id="token-317">value</span><span class="c_pink" id="token-318">)</span><span class="" id="token-319"> </span><span class="c_blue" id="token-320">then</span><span class="" id="token-321">
            </span><span class="c_white" id="token-322">print</span><span class="c_pink" id="token-323">(</span><span class="c_yellow" id="token-324">"Prime found: "</span><span class="" id="token-325"> </span><span class="c_pink" id="token-326">..</span><span class="" id="token-327"> </span><span contenteditable="true" class="c_ref-300 c_white" id="token-328">key</span><span class="c_pink" id="token-329">)</span><span class="" id="token-330">
        </span><span class="c_blue" id="token-331">end</span><span class="" id="token-332">
    </span><span class="c_blue" id="token-333">end</span><span class="" id="token-334">
</span><span class="c_blue" id="token-335">end</span><span class="" id="token-336">

</span><span class="c_green" id="token-337">-- You might be satisfied with your result, but before sharing your work you should
</span><span class="c_green" id="token-338">-- use [Minify] (under Miscellaneous) to destroy all local variables and comments.
</span><span class="c_green" id="token-339">-- Please note that some pre-configured obfuscate buttons already do this for you ;)
</span><span class="c_white" id="token-340">print</span><span class="c_pink" id="token-341">(</span><span class="c_yellow" id="token-342">"How to obfuscate best?"</span><span class="c_pink" id="token-343">)</span><span class="" id="token-344">

</span><span class="c_green" id="token-345">-- The highest level of obfuscation is done through virtualization,
</span><span class="c_green" id="token-346">-- in our case this means we will be running Lua inside Lua using the
</span><span class="c_green" id="token-347">-- Ironbrew2 virtulization tool. Ready? click [Demo VM] and see what happens!
</span><span class="" id="token-348"></span></code>
            `
        }
    })
    document.getElementById("btn-uploadfile").addEventListener("click", function(e) {
        if (!isObfuscating) {
            document.getElementById("lua-file").click();
        }
    })

    // on file uploaded

    luafile.addEventListener("change", function(e) {
        if (!isObfuscating && this.files.length > 0) {
            // take first file
            codeWindow.style.filter = "blur(7px)";
            isObfuscating = true; // block UI buttons
            this.files[0].text().then(x => luaEngine.init(frontcallback, flags, true, x))
        }
    })
}

// TODO: remove?
/*
function getCaretCoordinates() {
    let x = 0;
    let y = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
        const selection = window.getSelection();
        if (selection.rangeCount !== 0) {
            const range = selection.getRangeAt(0).cloneRange();
            range.collapse(true);
            const rect = range.getClientRects()[0];
            if (rect) {
                x = rect.left;
                y = rect.top;
            }
        }
    }
    return { x, y };
}*/

// TODO: remove?
/*
function getCaretIndex(element) {
    let position = 0;
    let isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
        let selection = window.getSelection();
        if (selection.rangeCount !== 0) {
            let range = window.getSelection().getRangeAt(0);
            let preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            position = preCaretRange.toString().length;
        }
    }
    return position;
}*/

let frontcallback = function(lastEvent) {
    //var startOff = getCaretIndex(codeWindow)

    //codeWindow.style.filter = "blur(0px)";
    stopObfuscation();
    let test = document.getElementById("lua-codewindow");

    //        if (!luaEngine.parseScript($(".lang-lua"), lastEvent))
    if (!luaEngine.parseScript(test, lastEvent))
        return;

    // TODO: find a better way to count lines lol!
    /*
    let testLines = document.getElementById("notepad-lines-ul");
    if (testLines != null && test != null) {
        testLines.innerHTML = "";
        var count = 1;
        //let lineCount = test.innerText.split('\n').length;
        for (var i = 0; i <= test.innerText.length;  i++) {
            if (test.innerText[i] == '\n' || i == test.innerText.length-1) {
                let txt = document.createTextNode(count++);
                var li = document.createElement("li");
                li.appendChild(txt);
                testLines.appendChild(li);
                if (count >= 2048)
                    break;
            }
        }
    }*/

    // NOTE: skip range as we no longer want editable content?
    /*
    var newRange = document.createRange()
    // quick fix, iterate over nodes
    var index = 0
    var targetChild = 0
    var nextChild = codeWindow.firstChild;
    for (var i = 0; i < codeWindow.children.length; i++) {
        var child = codeWindow.children[i]
        if (index + child.innerText.length >= startOff) {
            targetChild = i
            break;
        }
        index += child.innerText.length
    }
    newRange.setStart(codeWindow.childNodes[targetChild].firstChild, startOff - index)
    newRange.collapse(true)
    var sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(newRange)
    */

    // TODO: check size?
    let lconsole = document.getElementById("lua-console");
    if (lconsole != null && window.innerWidth > 600) {
        lconsole.style.display = "block";
    }

    // toogle UI elements
    toggleHome(luaEngine.getSessionId() == null)
};

let consolecallback = function(msg) {
    // TODO?
    let consoleul = document.getElementById("lua-console-ul");
    if (consoleul != null) {
        // Don't judge me for timestamp, judge ChatGPT
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(`[${hours}:${minutes}:${seconds}.${milliseconds}]: ${msg}`));
        consoleul.appendChild(li)
    }
}
consolecallback("test... Hello World!");
consolecallback("test... Hello World!");
consolecallback("test... Hello World!");
consolecallback("test... Hello World!");
consolecallback("test... Hello World!");
consolecallback("test... Hello World!");
consolecallback("test... Hello World!");
consolecallback("test... Hello World!");
consolecallback("test... Hello World!");
consolecallback("test... Hello World!123");


// TODO: remove? (or auto upload?)
//codeWindow.addEventListener("input", function (e) {
//    luaEngine.updateScript(this.innerText, frontcallback)
//});

// TODO: remove?
codeWindow.addEventListener("click", function(e) {
    //toggleTooltip(e)
})

let flags = document.getElementsByClassName(gtagz).length;

// #==================================#
// #        Init Lua Engine           #
// #==================================#
luaEngine.init(frontcallback, flags)

function updateTop(sessions) {
    let landingpage = document.getElementById("home-landingpage")
    let targetDOM = document.getElementById("lua-sessions");
    let codewindow = document.getElementById("lua-codewindow");

    // main/home?
    let spanHome = document.createElement("span");
    spanHome.className = "top-tab-close";
    //spanHome.appendChild(document.createTextNode("x"));
    let txtHome = document.createTextNode("Home")
    let aHome = document.createElement("a");
    if (luaEngine.getSessionId() == null) {
        aHome.href = "#";
        aHome.style = "color: lightblue; text-decoration: none; cursor: default;";
        landingpage.style.display = "flex";
    } else {
        aHome.href = "/";
        aHome.style = "text-decoration: none;";
    }
    aHome.appendChild(txtHome)
    let liHome = document.createElement("li");
    liHome.className = "top-tab";
    liHome.appendChild(aHome);
    liHome.appendChild(spanHome)
    targetDOM.appendChild(liHome);

    for (var i = 0; i < sessions.length; i++) {
        let spanNode = document.createElement("span");
        spanNode.className = "top-tab-close";
        spanNode.appendChild(document.createTextNode("x"));
        let txtNode = document.createTextNode(sessions[i])
        let aNode = document.createElement("a");
        if (luaEngine.getSessionId() == sessions[i]) {
            aNode.href = "#";
            aNode.style = "color: lightblue; text-decoration: none; cursor: default;";
        } else {
            aNode.href = "./?session=" + sessions[i];
            aNode.style = "text-decoration: none;";
        }
        aNode.appendChild(txtNode)
        let liNode = document.createElement("li");
        liNode.className = "top-tab";
        liNode.appendChild(aNode);
        liNode.appendChild(spanNode);
        targetDOM.appendChild(liNode);
    }
    codewindow.style.filter = "blur(0)";
}
luaEngine.getInstances(updateTop)

// No longer writable
/*
document.getElementById('lua-codewindow').addEventListener('keydown', (evt) => {
    // TODO filter out only specific key codes?
    if (luaEngine.getSessionId() != null) {
        evt.preventDefault();
    }
    //if (evt.keyCode === 13) {
    //    // New lines are weird, the 'contenteditable' will add a <div> instead of a <span>
    //    evt.preventDefault();
    //    luaEngine.updateLastTick(); // prevent updating
    //    document.execCommand('insertHTML', false, '<br/>') // simulate new line
    //}
});
*/
//};

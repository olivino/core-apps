
var scrollToBottomIsNeeded = false;
    alert("checkIfScrollToBottomIsNeeded() called with result " + scrollToBottomIsNeeded);
        scrollToBottom();
    else {
        newMsgCounter++;
        document.getElementById("newMsgCounter").innerHTML =
                                    newMsgCounter +
                                    " new message" +
                                    (newMsgCounter > 1 ? "s" : "");
            pulsateNewMsgButton(true);
    }



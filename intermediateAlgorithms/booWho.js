
function booWho(bool) {
  if (bool === true || bool === false) {
    bool = true;
  } else {
    bool = false;
  }
  
  return bool;
}

booWho("true");

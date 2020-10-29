function handleSubmit(e)
{
    e.preventDefault();
    document.getElementById("booking").classList.add("invisible");
    document.getElementById("success").classList.remove("invisible");
    return false;
}
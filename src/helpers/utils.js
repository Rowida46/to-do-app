export const find_dublicate_item = (lst, newitem) => {
    lst.find(item => item.id === newitem.id)
}


export const item_obj = {
    title: "",
    status: false,
    percentage: 0

}